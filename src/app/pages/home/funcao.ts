export const formatResponse = _prResponse => {

    if (_prResponse.this.indexOf('[{') === -1 && (_prResponse.this.indexOf('[]') === 0)) return [];

    let inicioData = _prResponse.this.indexOf('[{');
    let finalData = _prResponse.length;
    console.log('Olar ', inicioData, finalData);

    return inicioData === -1
        ? _prResponse.substring(inicioData, finalData)
        : eval(_prResponse.substring(inicioData, finalData));
}