import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

export default class NotificationManager {
  static channelDetails = {
    channelId: 'PROPERTY_FINDER',
    channelName: 'Property Finder Notif Channel',
  };
  static configure() {
    PushNotification.configure({
      onNotification: (notification) => {
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      requestPermissions: true,
    });
    PushNotification.createChannel(
      NotificationManager.channelDetails,
      (isCreated) => console.log('channel created', isCreated),
    );
  }
  static scheduleNotification({title, message, id, date}) {
    PushNotification.localNotificationSchedule({
      title,
      id,
      message,
      date,
      allowWhileIdle: false,
      ...NotificationManager.channelDetails,
    });
  }
  static cancelLocalNotification(id) {}
}
