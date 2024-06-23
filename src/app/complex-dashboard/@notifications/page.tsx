"use client";
import Card from '@/components/card';
import Link from 'next/link';
import React, { Component } from 'react';

interface PageProps {
    
}

interface PageState {
    
}

class Page extends Component<PageProps, PageState> {
    render() {
        return (
            <Card>
                <div>Notification</div>
                <br/>
                <p>
                    <Link href="/complex-dashboard/archived">Archived</Link>
                </p>
            </Card>
        );
    }
}

export default Page;
