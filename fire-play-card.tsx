
'use client';

import { useState } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Flame, Shield, MessageSquare, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';


function VerificationDialog({ user }: { user: any }) {
    const [verificationCode, setVerificationCode] = useState('');
    const [isVerifying, setIsVerifying] = useState(false);
    const { toast } = useToast();

    const handleVerification = async () => {
        if (!verificationCode || verificationCode.length !== 6) {
            toast({ variant: 'destructive', title: 'Invalid Code', description: 'Please enter a valid 6-digit code.' });
            return;
        }
        setIsVerifying(true);
        try {
            const userDocRef = doc(db, 'users', user.uid);
            const userDoc = await getDoc(userDocRef);
            if (userDoc.exists() && userDoc.data().verificationCode === verificationCode) {
                await updateDoc(userDocRef, {
                    isVerified: true,
                    verificationCode: null, // Clear the code after use
                });
                toast({ title: 'Verification Successful!', description: 'Your FirePlay account is now verified.' });
            } else {
                throw new Error("The verification code is incorrect.");
            }
        } catch (error: any) {
            toast({ variant: 'destructive', title: 'Verification Failed', description: error.message || 'Could not verify your account.' });
        } finally {
            setIsVerifying(false);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                 <Button variant="outline" size="sm" className="absolute top-2 right-2 border-dashed border-accent/50 text-accent hover:bg-accent/10 hover:text-accent">
                    <Shield className="mr-2 h-4 w-4" />
                    Verify Now
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Account Verification</DialogTitle>
                     <DialogDescription>
                        Enter the 6-digit verification code you received on WhatsApp.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-4">
                     <Alert>
                        <MessageSquare className="h-4 w-4"/>
                        <AlertTitle>How to get a code?</AlertTitle>
                        <AlertDescription>
                            Send a screenshot of your in-game profile to <span className="font-bold text-accent">7489376351</span> on WhatsApp. Our team will verify it and send you a code.
                        </AlertDescription>
                    </Alert>
                    <div className="space-y-2">
                        <Label htmlFor="verification-code">Verification Code</Label>
                        <Input 
                            id="verification-code" 
                            type="text" 
                            maxLength={6}
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            placeholder="Enter 6-digit code"
                            className="h-12 text-center text-lg tracking-widest font-mono"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleVerification} disabled={isVerifying} className="w-full btn-glow">
                        {isVerifying ? <Loader2 className="animate-spin"/> : "Verify Account"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export function FirePlayCard({ userData, showVerificationButton = true }: { userData: any; showVerificationButton?: boolean }) {
  if (!userData) return null;
  
  return (
    <Card className="relative w-full max-w-md mx-auto bg-gradient-to-br from-primary/20 to-background border-primary/30 shadow-2xl shadow-primary/20">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-white">
          FirePlay Card
        </CardTitle>
         <Badge variant={userData.isVerified ? 'default' : 'secondary'} className={userData.isVerified ? 'bg-accent/20 text-accent border-accent/30' : ''}>
          {userData.isVerified ? 'Verified' : 'Not Verified'}
        </Badge>
      </CardHeader>
      <CardContent>
        <div>
          <h2 className="text-2xl font-bold">{userData.name}</h2>
          <p className="text-sm font-mono text-muted-foreground">{userData.fireplayId}</p>
        </div>
        <Separator className="my-4" />
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">In-Game Name</p>
            <p className="font-semibold">{userData.username || 'Not Set'}</p>
          </div>
          <div>
            <p className="text-muted-foreground">In-Game UID</p>
            <p className="font-mono">{userData.gameUid || 'Not Set'}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Level</p>
            <p className="font-semibold">{userData.level || 'Not Set'}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Rank</p>
            <p className="font-semibold">{userData.rank || 'Unranked'}</p>
          </div>
        </div>
      </CardContent>
      {showVerificationButton && !userData.isVerified && <VerificationDialog user={userData} />}
    </Card>
  )
}
