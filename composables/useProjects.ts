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

  async function addNewProject(projectName: string) {
    const { addDocData, addDocInDocData } = useFirestore()
    const projectId =  await addDocData(
      {
        collectionKey: 'project',
        collectionData: {
          name: projectName,
          waitTime: 30,
          sections: [
            {
              name: '',
              pageUrl: '',
              scenario: []
            }
          ],
        },
      },
      true
    )

    await addDocInDocData(
      {
        collectionKey: 'project',
        docKey: projectId,
        newCollectionKey: 'section',
        collectionData: {
          name: '',
          scenario: [],
        },
      },
      true
    )

    return projectId
  }

  async function deleteProject(projectId:string) {
    const { deleteDocData } = useFirestore()
    await deleteDocData({ collectionKey: 'project', docKey: projectId })
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
    addNewProject,
    deleteProject,
    getProjects,
    getCurrentProject,
  }
}
