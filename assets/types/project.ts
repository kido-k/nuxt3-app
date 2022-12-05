interface Project {
  projectId: string
  setting: {
    name: string,
    sections: [],
    timestamp: string,
    waitTime: number
  }
}

interface Section {
	name: string
	pageUrl: string
	scenario: []
}