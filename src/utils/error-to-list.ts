const createErrorString = (errorCount: number, e: Error) => `${errorCount}. ${e} `

export default function errorToList(errorList: Error | Error[]) {
  let message: string[] = [];

  if (errorList instanceof Array) {
    let errorCount = 1;
    errorList.forEach((e: Error) => {
      let error = createErrorString(errorCount, e);
      message.push(error);
      errorCount++;
    });
  }
  else {
    const err = createErrorString(1, errorList)
    message.push(err)
  }

  return message
}