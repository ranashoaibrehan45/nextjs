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
                <div>Archived Notification</div>
                <br/>
                <p>
                    <Link href="/complex-dashboard">Default</Link>
                </p>
            </Card>
        );
    }
}

export default Page;
