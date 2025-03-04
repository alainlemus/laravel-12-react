import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/users',
    },
];

interface User {
    id: number;
    name: string;
    email: string;
}

interface UsersProps {
    users: User[];
}

export default function Users({ users }: UsersProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">

                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 rounded-xl border md:min-h-min">
                    <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                        <h1 className="text-2xl font-bold">Users</h1>
                        <ul className="list-disc pl-5">
                            {users.map((user) => (
                                <li key={user.id} className="text-lg">
                                    {user.name} - {user.email}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
