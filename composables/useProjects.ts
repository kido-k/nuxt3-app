export const useProjects = () => {

  const projects = useState<Array<Project>>('projects', () => [])

  async function setProjects() {
    const { getFieldData } = useFirestore()
    projects.value = await getFieldData('project')
    projects.value.unshift({
      projectId: '',
      setting: {
        name: '',
        timestamp: '',
      },
    })
  }

  async function deleteProject(projectId:string) {
    const { deleteDocData } = useFirestore()
    await deleteDocData('project', projectId)
  }

  function getProjects() {
    return projects.value
  }

  function getCurrentProject(projectId:string) {
    const _projects = projects.value
    return _projects.find(project => project.projectId === projectId)
  }

  return {
    setProjects,
    deleteProject,
    getProjects,
    getCurrentProject,
  }
}
