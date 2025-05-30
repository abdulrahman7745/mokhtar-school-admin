import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Bell, Users, Calendar, FileText, MessageCircle, Star } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center">مدارس المختار الأهلية - لوحة الإدارة</h1>
      </header>

      <Tabs defaultValue="students" className="max-w-5xl mx-auto">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2">
          <TabsTrigger value="students">الطلاب والموظفون</TabsTrigger>
          <TabsTrigger value="attendance">الحضور والتنبيهات</TabsTrigger>
          <TabsTrigger value="grades">الدرجات والتقارير</TabsTrigger>
          <TabsTrigger value="assignments">الواجبات والاختبارات</TabsTrigger>
          <TabsTrigger value="communication">التواصل</TabsTrigger>
          <TabsTrigger value="behavior">السلوك</TabsTrigger>
        </TabsList>

        <TabsContent value="students">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Users className="text-blue-500" />
                <h2 className="text-xl font-semibold">إدارة الطلاب والموظفين</h2>
              </div>
              <Button variant="outline">تسجيل طالب جديد</Button>
              <Button variant="outline">تسجيل موظف جديد</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attendance">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Calendar className="text-green-500" />
                <h2 className="text-xl font-semibold">تسجيل الحضور والغياب</h2>
              </div>
              <Button variant="outline">تسجيل الحضور اليومي</Button>
              <Button variant="outline">إرسال تنبيهات الغياب</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="grades">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <FileText className="text-yellow-500" />
                <h2 className="text-xl font-semibold">إدخال الدرجات والتقارير</h2>
              </div>
              <Button variant="outline">إدخال الدرجات</Button>
              <Button variant="outline">طباعة التقارير</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assignments">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <FileText className="text-purple-500" />
                <h2 className="text-xl font-semibold">إدارة الواجبات والاختبارات</h2>
              </div>
              <Button variant="outline">إنشاء واجب</Button>
              <Button variant="outline">جدولة اختبار</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communication">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <MessageCircle className="text-cyan-500" />
                <h2 className="text-xl font-semibold">التواصل مع أولياء الأمور</h2>
              </div>
              <Button variant="outline">نشر إعلان</Button>
              <Button variant="outline">فتح دردشة</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="behavior">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Star className="text-orange-500" />
                <h2 className="text-xl font-semibold">مراقبة السلوك</h2>
              </div>
              <Button variant="outline">إضافة مكافأة</Button>
              <Button variant="outline">تسجيل مخالفة</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}