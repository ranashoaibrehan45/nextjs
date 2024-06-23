"use client";
import Card from '@/components/card';
import React, { Component } from 'react';

interface PageProps {
    
}

interface PageState {
    
}

class Page extends Component<PageProps, PageState> {
    render() {
        return (
            <div>
                <Card>Please login to continue!</Card>
            </div>
        );
    }
}

export default Page;
