/* Friends context is global state used to store the Friends the user has. Specfiically
    needed in the Stat Tracker functionality of site.
*/
import { createContext } from "react";

export const FriendsContext = createContext(null);
