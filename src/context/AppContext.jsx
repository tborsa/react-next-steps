import React, {createContext} from 'react';

const AppContext = createContext({dogs: ['roofus', 'spotter', 'boogey', 'ben']})

export default AppContext;