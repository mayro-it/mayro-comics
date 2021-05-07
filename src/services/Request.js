export default class ServerConnector {
    constructor(path, api = '/api/') {
        this.path = api + path;
    }
    
    isOkStatus(status) {
        return [200, 201, 204].includes(status);
    }
    
    static makeQuery(obj){
        let query = '';
        Object.keys(obj).forEach((key, i) => {
            query += `&${key}=${obj[key]}`
        });
        return query.substr(1);
    }

    static _handleErrors(res) {
        if(res.status !== 401) return res;
        //logout
    }

    send(req, errHandler) {
        const path = `${this.path}${req.path}`;
        return ServerConnector._makeRequest(req, path, errHandler).then((res) => {
            return res;
        })
    }
    
    static _makeRequest(req, path, errHandler) {
        return ServerConnector.fetcher(req, path, errHandler)
            .then((res) => ServerConnector._handleErrors(res))
            .then((res) => {
                    return res.json().then(json => {
                        return { status: res.status, json };
                    });
                }
            )
            .catch(error => {
                if (errHandler) {

                }
                return { status: error.message, json: {} }
            });
    }

    static fetcher(req, path, errHandler) {
        const headersObj = Object.assign({
            'content-type': 'application/json',
            'Cache-Control': 'no-cache',
        }, req.headers);

        const headers = new Headers(headersObj);

        const options = Object.assign({
            method: 'POST',
            //credentials: 'same-origin',
        }, req.options);

        options.headers = headers;
        const request = new Request(path, options);
        return fetch(request)
    }
}