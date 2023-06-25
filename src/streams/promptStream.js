import { BehaviorSubject } from 'rxjs';

// Create a BehaviorSubject to hold the data
const promptStream = new BehaviorSubject('Descríbeme..');

// Export the stream
export default promptStream;