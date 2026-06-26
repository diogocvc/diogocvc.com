import { useLocation } from 'react-router';
import { projects, getProject, getNextProject, getPreviousProject } from './projects';
import { projectsPt, getProjectPt, getNextProjectPt, getPreviousProjectPt } from './projects-pt';
import type { Project } from './projects';

export function useProjects(): Project[] {
  const location = useLocation();
  const isPt = location.pathname.startsWith('/br');
  return isPt ? projectsPt : projects;
}

export function useProject(id: string): Project | undefined {
  const location = useLocation();
  const isPt = location.pathname.startsWith('/br');
  return isPt ? getProjectPt(id) : getProject(id);
}

export function useNextProject(currentId: string): Project | null {
  const location = useLocation();
  const isPt = location.pathname.startsWith('/br');
  return isPt ? getNextProjectPt(currentId) : getNextProject(currentId);
}

export function usePreviousProject(currentId: string): Project | null {
  const location = useLocation();
  const isPt = location.pathname.startsWith('/br');
  return isPt ? getPreviousProjectPt(currentId) : getPreviousProject(currentId);
}
