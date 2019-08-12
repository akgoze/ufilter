export interface Test {
  test_id: string;
  test_name: string;
  test_date: Date;
  test_company?: string;
  test_description?: string;
  test_attendees?: [string];
}
