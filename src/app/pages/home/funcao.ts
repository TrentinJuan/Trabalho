export const formatResponse =  (_prResponse: string) => {
    console.log('formatResponse: ', _prResponse)

    if (_prResponse.indexOf('[{') === -1 && (_prResponse.indexOf('[]') === 0)) return [];

    var inicioData = _prResponse.indexOf('[{');
    var finalData = _prResponse.length;


    return inicioData === -1
        ? _prResponse.substring(inicioData, finalData)
        : eval(_prResponse.substring(inicioData, finalData));
}
