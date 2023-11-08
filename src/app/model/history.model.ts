// history.model.ts
export class FatigueHistory {
    id: number;
    timestamp: string;
    emp_id: string;
    fatigue_status: number;

    constructor(data: any) {
        this.id = data.id;
        this.timestamp = data.timestamp;
        this.emp_id = data.emp_id;
        this.fatigue_status = data.fatigue_status;
    }
}