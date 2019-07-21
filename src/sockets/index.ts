import socketClient from 'socket.io-client';
import appConfig from "../config";

let socket : SocketIOClient.Socket = null as any;

if(appConfig.socketUrl){
    socket = socketClient.connect(appConfig.socketUrl);
}

export const isSocketInitialized = () => {
    return !!socket;
}

export default socket;
