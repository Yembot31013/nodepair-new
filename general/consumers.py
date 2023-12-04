import django
django.setup()

from channels.consumer import AsyncConsumer

class ChatConsumer(AsyncConsumer):
  async def websocket_connect(self, event):
    print("connect", event)

    await self.send({
      'type': 'websocket.accept'
    })

  async def websocket_receive(self, event):
    print(f"message-{self.scope['user']}", event)
    
  async def websocket_disconnect(self, event):
    print('disconnect', event)
