import { useQuery } from "@tanstack/react-query";

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  stars?: number;
  forks?: number;
}

const fetchGitHubRepos = async (username: string): Promise<GitHubRepo[]> => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }
  
  return response.json();
};

const transformRepoToProject = (repo: GitHubRepo): Project => {
  const tech: string[] = [];
  
  // Add primary language
  if (repo.language) {
    tech.push(repo.language);
  }
  
  // Add topics as tech stack
  if (repo.topics && repo.topics.length > 0) {
    tech.push(...repo.topics.slice(0, 3)); // Limit to 3 topics
  }
  
  return {
    title: repo.name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    description: repo.description || 'No description available',
    tech: tech.length > 0 ? tech : ['Code'],
    github: repo.html_url,
    stars: repo.stargazers_count > 0 ? repo.stargazers_count : undefined,
    forks: repo.forks_count > 0 ? repo.forks_count : undefined,
  };
};

export const useGitHubRepos = (username: string) => {
  return useQuery({
    queryKey: ['github-repos', username],
    queryFn: () => fetchGitHubRepos(username),
    staleTime: 1000 * 60 * 10, // Cache for 10 minutes
    select: (repos) => {
      // Filter out forks and sort by stars/updated date
      const ownRepos = repos.filter(repo => !repo.fork);
      
      // Sort by stars first, then by update date
      const sortedRepos = ownRepos.sort((a, b) => {
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      });
      
      // Take top 6 repos and transform them
      return sortedRepos.slice(0, 6).map(transformRepoToProject);
    },
  });
};
