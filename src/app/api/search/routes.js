import { NextResponse } from "next/server";

async function fetchCoins() {
    const response = await fetch('http://5.104.83.78:1337/api/search-law-post?search=48/2023/NQ-HĐND&page=1', {
        "method": "GET",
        "headers": {
            'Content-Security-Policy' :
            "connect-src 'self' https:;img-src 'self' data: blob: https://market-assets.strapi.io;media-src 'self' data: blob:;default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline'",
            
            'Referrer-Policy': 'no-referrer',
            
            'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
            
            'X-Content-Type-Options': 'nosniff',
            
            'X-DNS-Prefetch-Control': 'off',
            
            'X-Download-Options':'noopen',
            
            'X-Frame-Options':
            'SAMEORIGIN',
            
            'X-Permitted-Cross-Domain-Policies':
            'none',
            
            'Vary':
            'Origin',
            
            'Content-Type':
            'application/json; charset=utf-8',
            
            'X-Powered-By':
            'Strapi <strapi.io>',
            
            'Content-Length':
            '309903',
            
            'Date':
            'Sat, 04 Nov 2023 06:18:55 GMT',
            
            'Connection':
            'keep-alive',
            
            'Keep-Alive':
            'timeout=5'
        }

        })
        
        const dataLaw = await response.json();
        return dataLaw;

}

export async function GET(request) {
    const dataLaw = await fetchDataLaw();
    const { searchParams } = new URL(request.url);
    console.log(searchParams.get('query'))
    const query = searchParams.get('query');

    const filteredData = dataLaw.hits.hits.filter((data) => {
        return data.name.toLowerCase().includes(query.toLowerCase()) || data.symbol.toLowerCase().includes(query.toLowerCase())
    })

    return NextResponse.json(filteredData);
}