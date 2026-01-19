const accentStyles = {
  primary: "text-primary border-primary/20 bg-primary/10",
  accent: "text-accent border-accent/20 bg-accent/10",
  success: "text-success border-success/20 bg-success/10",
  warning: "text-warning border-warning/20 bg-warning/10",
};


export const StatsCard = ({ label, value, subtitle, icon, accentColor}) => {

    return (
        <div className="stat-card">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-muted-foreground text-sm font-medium">{label}</p>
                    <p className="font-mono mt-2 text-3xl font-bold">{value}</p>
                    <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>
                </div>
                
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${accentStyles[accentColor]}`}>
                    {icon}
                </div>
            </div>
        </div>
    );
}