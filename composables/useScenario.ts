export const useScenario = () => {

  const scenario = useState<Array<Project>>('scenario', () => [])

  async function setScenario() {
    // const { getFieldData } = useFirestore()
    // projects.value = await getFieldData('project')
    // projects.value.unshift({
    //   projectId: '',
    //   setting: {
    //     name: '',
    //     timestamp: '',
    //   },
    // })
  }

  return {
    setScenario,
  }
}
