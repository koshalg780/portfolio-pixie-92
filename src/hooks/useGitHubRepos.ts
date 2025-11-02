import { useQuery } from "@tanstack/react-query";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  stars?: number;
  forks?: number;
}

interface GitHubGraphQLResponse {
  data: {
    user: {
      pinnedItems: {
        nodes: Array<{
          name: string;
          description: string | null;
          url: string;
          stargazerCount: number;
          forkCount: number;
          primaryLanguage: {
            name: string;
          } | null;
          repositoryTopics: {
            nodes: Array<{
              topic: {
                name: string;
              };
            }>;
          };
        }>;
      };
    };
  };
}

const fetchPinnedRepos = async (username: string): Promise<GitHubGraphQLResponse> => {
  const query = `
    query {
      user(login: "${username}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              stargazerCount
              forkCount
              primaryLanguage {
                name
              }
              repositoryTopics(first: 5) {
                nodes {
                  topic {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch pinned repositories');
  }

  return response.json();
};

const transformRepoToProject = (repo: any): Project => {
  const tech: string[] = [];

  // Add primary language
  if (repo.primaryLanguage?.name) {
    tech.push(repo.primaryLanguage.name);
  }

  // Add topics as tech stack
  if (repo.repositoryTopics?.nodes) {
    const topics = repo.repositoryTopics.nodes
      .map((node: any) => node.topic.name)
      .slice(0, 4); // Limit to 4 topics
    tech.push(...topics);
  }

  return {
    title: repo.name
      .split('-')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    description: repo.description || 'No description available',
    tech: tech.length > 0 ? tech : ['Code'],
    github: repo.url,
    stars: repo.stargazerCount > 0 ? repo.stargazerCount : undefined,
    forks: repo.forkCount > 0 ? repo.forkCount : undefined,
  };
};

export const useGitHubRepos = (username: string) => {
  return useQuery({
    queryKey: ['github-pinned-repos', username],
    queryFn: () => fetchPinnedRepos(username),
    staleTime: 1000 * 60 * 10, // Cache for 10 minutes
    select: (response) => {
      const pinnedRepos = response.data.user.pinnedItems.nodes;
      return pinnedRepos.map(transformRepoToProject);
    },
  });
};
