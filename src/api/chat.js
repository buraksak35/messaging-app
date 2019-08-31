import sortBy from 'lodash.sortby';

const chatDataUrl =
  'https://jsonblob.com/api/jsonBlob/4f421a10-5c4d-11e9-8840-0b16defc864d';

export const getMessagesFromBackend = async () => {
  try {
    const messages = await fetch(chatDataUrl);
    const messagesJson = await messages.json();

    const sortedMessages = sortBy(messagesJson, [
      function(o) {
        return o.timestamp;
      },
    ]);

    return sortedMessages;
  } catch (error) {
    console.error(error);
  }
};
