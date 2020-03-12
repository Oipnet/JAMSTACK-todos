const sendQuery = require('./utils/send-query');
const UPDATE_TODO = `
  mutation($text: String!, $id: ID!, $completed: Boolean!){
    updateTodo(
      id: $id,
      data: {
        text: $text
        completed: $completed
      }
    ) {
      _id 
      text 
      completed
    }
  }
`;

exports.handler = async event => {
  const { text, id, completed } = JSON.parse(event.body);
  const { data, errors } = await sendQuery(UPDATE_TODO, {
    text,
    id,
    completed
  });

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ todo: data.updateTodo })
  };
};
