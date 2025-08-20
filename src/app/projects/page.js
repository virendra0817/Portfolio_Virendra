// Do NOT use "use client" here — keep this a Server Component
import AnimatedProjects from './animatedProject';

export const metadata = {
  title: 'Projects - Virendra Vikram Singh',
};

export default function ProjectsPage() {
  return <AnimatedProjects />;
}
