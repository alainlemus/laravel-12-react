import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/products',
    },
];

export default function Products() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
        <Head title="Products" />
        <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
            <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 rounded-xl border md:min-h-min">
                <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="w-2xs">Edit Profile</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you're done.
                            </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                Name
                                </Label>
                                <Input
                                id="name"
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                Username
                                </Label>
                                <Input
                                id="username"
                                defaultValue="@peduarte"
                                className="col-span-3"
                                />
                            </div>
                            </div>
                            <DialogFooter>
                            <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    </AppLayout>
  )
}
