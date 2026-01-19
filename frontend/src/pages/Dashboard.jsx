import { Layout } from "../components/layout/layout.jsx";
import { StatsCard } from "../components/dashboard/StatsCard.jsx";
import { Code2, Clock, BookOpen, Flame } from "lucide-react";
import { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";


export default function Dashboard() {
    const USER = import.meta.env.VITE_USERNAME
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const [sessions, setSessions] = useState([]);
    const [resources, setResources] = useState([]);

    const fetchAllSessions = useCallback(async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/v1/sessions`);
            setSessions(response.data);
        } catch (error) {
            console.error("Error fetching sessions:", error);
        } finally {
            console.log("Fetching sessions completed")
        }
    }, [API_BASE_URL]);

    const last30Days = useMemo(() => {
        const currentDate = new Date();
        const fromDate = new Date(
            currentDate.getFullYear(), 
            currentDate.getMonth(), 
            currentDate.getDate() - 30
        );

        const lastMonthSessions = sessions.filter((session) => {
            const sessionDate = new Date(session.date);
            if (isNaN(sessionDate.getTime())) {
                return false
            }
            return sessionDate >= fromDate && sessionDate <= currentDate; // doesn't include sessions in the future
        });

        return lastMonthSessions
    }, [sessions])

    const last30DaysSessionCount = useMemo(() => {
        return last30Days.length;
    }, [last30Days])

    const last30DaysHoursCoded = useMemo(() => {
        const totalMinutes = last30Days.reduce(
            (sum, session) => sum + (session.durationMinutes),
            0
        );
        return (totalMinutes / 60).toFixed(2);
    }, [last30Days]);

    const fetchAllResources = useCallback(async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/v1/resources`);
            setResources(response.data);
        } catch (error) {
            console.error("Error fetching resources:", error);
        } finally {
            console.log("Fetching resources completed")
        }
    }, [API_BASE_URL]);

    const resourcesToReviewCount = useMemo(() => {
        const resourcesToReview = resources.filter((resource) => 
            resource.status === "To watch"
        )

        return resourcesToReview.length;
    }, [resources])

    useEffect(() => {
        fetchAllSessions();
        fetchAllResources();
    }, [fetchAllSessions, fetchAllResources]);
    
    return (
       <Layout>
            <div className="mx-auto max-w-7xl px-6 py-8">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">
                        {`Welcome back, ${USER}`} 
                    </h1>
                    <p className="mt-2 text-muted-foreground">
                        Track your progress, review your sessions, and keep learning.
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                    <StatsCard 
                        label={"Total Sessions"}
                        value={last30DaysSessionCount}
                        subtitle={"Last 30 days"}
                        icon={<Code2 className="h-6 w-6"/>}
                        accentColor={"primary"}
                    />
                    <StatsCard 
                        label={"Hours Coded"}
                        value={last30DaysHoursCoded}
                        subtitle={"Last 30 days"}
                        icon={<Clock className="h-6 w-6"/>}
                        accentColor={"accent"}
                    />
                    <StatsCard 
                        label={"To Review"}
                        value={resourcesToReviewCount}
                        subtitle={"Resources queued"}
                        icon={<BookOpen className="h-6 w-6"/>}
                        accentColor={"warning"}
                    />
                    <StatsCard 
                        label={"Current Streak"}
                        value={null}
                        subtitle={"Days in a row"}
                        icon={<Flame className="h-6 w-6"/>}
                        accentColor={"success"}
                    />
                </div>

            </div>
       </Layout>
    );
}