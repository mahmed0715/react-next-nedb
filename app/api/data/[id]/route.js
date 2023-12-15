// /api/route.js

import { NextResponse } from 'next/server';

const Datastore = require('nedb-promises');

let datastore = Datastore.create('data.db');

export async function GET(req, { params: { id } }) {
    console.log("Got id request", id)
    const data = await datastore.findOne({ _id: id })
    return await NextResponse.json(data)
}

export async function PUT(req, { params: { id } }) {
    // Get data from request body
    console.log({ id });
    const data = await req.json();
    const { name, sectors, agree } = data;

    const dataFound = await datastore.findOne({ _id: id })
    console.log(data, dataFound)
    // Validate data
    if (!dataFound) {
        return new NextResponse('Not found', { status: 404 });
    }

    // Create new data object
    const newData = {
        name,
        sectors,
        agree,
        timestamp: new Date().toISOString(),
    };
    try {
        const updated = await datastore.updateOne({ _id: id }, newData, { returnUpdatedDocs: true });
        console.log({ updated })
        return NextResponse.json(updated);
    } catch (error) {
        console.error(error)
        return new NextResponse(error, { status: 500 });
    }

}