export const formatResponse = _prResponse => {

    if (_prResponse.indexOf('[{') === -1 && (_prResponse.indexOf('[]') === 0)) return [];

    let inicioData = _prResponse.indexOf('[{');
    let finalData = _prResponse.length;
    console.log('Olar ', inicioData, finalData);

    return inicioData === -1
        ? _prResponse.substring(inicioData, finalData)
        : eval(_prResponse.substring(inicioData, finalData));
}