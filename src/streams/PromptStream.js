import { BehaviorSubject } from 'rxjs';

// Create a BehaviorSubject to hold the data
const PromptStream = new BehaviorSubject('');

// Export the stream
export default PromptStream;