import { BehaviorSubject } from 'rxjs';

// Create a BehaviorSubject to hold the data
const promptStream = new BehaviorSubject('');

// Export the stream
export default promptStream;