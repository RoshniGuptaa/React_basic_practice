import React from "react";
//Strp 1 :Creating user context
const UserContext=React.createContext()
const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export {UserProvider,UserConsumer}
export default {UserContext}