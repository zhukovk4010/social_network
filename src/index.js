import state, { addPost } from './Redux/state';
import { rerenderApp } from './render';


rerenderApp(state, addPost);