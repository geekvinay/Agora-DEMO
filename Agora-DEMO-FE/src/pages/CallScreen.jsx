import Chat from "../components/Chat";

const CallScreen = () => {
  return (
      <div className="w-full h-full grid grid-rows-1 grid-cols-3">
          <section className="video w-full h-full bg-gray-50 col-start-1 col-span-2 grid grid-rows-3 grid-cols-1">
              <section className="main-video row-start-1 row-span-2 bg-gray-500 m-4 rounded-xl border-4">
              </section>``
          </section>
          <section className="chats w-full h-full bg-green-400">
              <Chat/>
          </section>
      </div>
  )
}

export default CallScreen