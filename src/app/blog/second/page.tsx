import { Metadata } from "next"

export const metadata : Metadata = {
    title: {
        'absolute': 'Second blog post', // absolute property ignore any tempalate defind in main layout.tsx
    }
}

export default function Second() {
    return <h1>Second Blog Post</h1>
}