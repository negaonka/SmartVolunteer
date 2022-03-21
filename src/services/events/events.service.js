export const eventsRequest = () => {
  // return fetch("http://192.168.1.150:5000/api/event").then((res) => {
  return fetch("http://localhost:5000/api/event", {
    headers: { accessToken: "U21hcnRWb2x1bnRlZXJBcHA=" },
  }).then((res) => {
    return res.json();
  });
};

/*
export const eventsTransform = (result) => {
  const mappedResults = result.map((event) => {
    return {
      ...event,
    };
  });
  console.log(mappedResults);
  return mappedResults;
};*/
