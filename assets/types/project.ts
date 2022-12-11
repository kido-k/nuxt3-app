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
  targetPage: {
    url: string,
    conditions: []
  }
	scenario: []
}

type Condition = {
	type: 'id' | 'class' | 'name';
	value: string;
	action: 'exist' | 'click' | 'input';
}