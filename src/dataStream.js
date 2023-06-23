import { BehaviorSubject } from 'rxjs';

// Create a BehaviorSubject to hold the data
const dataStream = new BehaviorSubject('Initial Value');

// Export the stream
export default dataStream;