
import httpBase  from './httpBase';
import axios from 'axios'

//git fetch --All
 export const fetchRepos = (user)=> {
   return httpBase.get(`users/${user}/repos`);
}

