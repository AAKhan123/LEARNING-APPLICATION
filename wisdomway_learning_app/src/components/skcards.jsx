
import React from 'react';
import { Skeleton } from 'primereact/skeleton';

export default function Skcard() {
    return (
        <div className="card">
            <div className="border-round border-0 surface-border p-4">
                <ul className="m-0 p-0 list-none">
                    <li className="mb-3">
                        <div className="flex">
                            <div style={{ flex: '1' }}>
                            <Skeleton height="2rem" className="mb-2"></Skeleton>
                                <Skeleton height="2rem" className="mb-2"></Skeleton>
                                <Skeleton height="2rem" className="mb-2"></Skeleton>
                                <Skeleton height="2rem" className="mb-2"></Skeleton>
                                <Skeleton height="2rem" className="mb-2"></Skeleton>
                                <Skeleton height="2rem" className="mb-2"></Skeleton>

                            </div>
                        </div>
                    </li>
                    <li className="mb-3">
                        <div className="flex">
                            <div style={{ flex: '1' }}>
                                <Skeleton height="2rem" className="mb-2"></Skeleton>
                                <Skeleton height="2rem" className="mb-2"></Skeleton>
                                <Skeleton height="2rem" className="mb-2"></Skeleton>

                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
        