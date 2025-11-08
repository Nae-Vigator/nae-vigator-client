import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Skeleton } from '@/components/ui/skeleton';

function TestPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold mb-8">Shadcn UI Components Test</h1>

        {/* Button */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Button</h2>
          <div className="flex gap-4 flex-wrap">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex gap-4 mt-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">Icon</Button>
          </div>
        </section>

        {/* Input & Label */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Input & Label</h2>
          <div className="space-y-4 max-w-md">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" />
            </div>
          </div>
        </section>

        {/* Textarea */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Textarea</h2>
          <div className="max-w-md">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Enter your message" rows={4} />
          </div>
        </section>

        {/* Separator */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Separator</h2>
          <div>
            <p>Content above</p>
            <Separator className="my-4" />
            <p>Content below</p>
          </div>
        </section>

        {/* Dialog */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Dialog</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>
                  This is a dialog description. You can put any content here.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p>Dialog content goes here.</p>
              </div>
            </DialogContent>
          </Dialog>
        </section>

        {/* Alert Dialog */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Alert Dialog</h2>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Open Alert Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. Do you want to proceed?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </section>

        {/* Popover */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Popover</h2>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="space-y-2">
                <h3 className="font-semibold">Popover Title</h3>
                <p className="text-sm text-muted-foreground">
                  Popover content is displayed here.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </section>

        {/* Tooltip */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Tooltip</h2>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Tooltip content</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </section>

        {/* Skeleton */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Skeleton</h2>
          <div className="space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-12 w-1/2" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default TestPage;
