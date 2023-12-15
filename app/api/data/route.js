// /api/route.js

import { NextResponse } from 'next/server';

const Datastore = require('nedb-promises');

let datastore = Datastore.create('data.db');
export async function GET(req){
    const data = await datastore.find({})
    return await NextResponse.json(data)
}
export async function POST(req) {
    // Get data from request body
    const data = await req.json();
    const { name, sectors, agree } = data;
    console.log(data)
    // Validate data
    if (!name || !sectors || !sectors.length || !agree) {
        return new NextResponse('Missing required data', { status: 400 });
    }

    // Create new data object
    const newData = {
        name,
        sectors,
        agree,
        timestamp: new Date().toISOString(),
    };
    try {
        const inserted = await datastore.insert(newData)
        console.log({ inserted })
        return NextResponse.json(inserted);
    } catch (error) {
        console.error(error)
        return new NextResponse(error, { status: 500 });
    }

}