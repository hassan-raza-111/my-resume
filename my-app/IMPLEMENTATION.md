# Pharma Field Force Sales Management System — Web Application Implementation Guide

> **Scope:** Web Dashboard & Admin Panel only (Next.js 16 + Tailwind CSS)
> **Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, PostgreSQL, Prisma ORM, NextAuth.js

---

## Table of Contents

1. [Project Architecture](#1-project-architecture)
2. [Folder Structure](#2-folder-structure)
3. [Database Schema](#3-database-schema)
4. [Authentication & Authorization (RBAC)](#4-authentication--authorization)
5. [Module 1: Admin & Configuration Panel](#5-module-1-admin--configuration-panel)
6. [Module 2: Field Force Management](#6-module-2-field-force-management)
7. [Module 3: Order Management System](#7-module-3-order-management-system)
8. [Module 4: Distribution Management (DMS)](#8-module-4-distribution-management-dms)
9. [Module 5: Route-to-Market (RTM)](#9-module-5-route-to-market-rtm)
10. [Module 6: Merchandising & Shelf Management](#10-module-6-merchandising--shelf-management)
11. [Module 7: BI & Analytics Dashboard](#11-module-7-bi--analytics-dashboard)
12. [Module 8: HR & Attendance](#12-module-8-hr--attendance)
13. [Required Packages](#13-required-packages)
14. [API Routes Structure](#14-api-routes-structure)
15. [Implementation Order (Step-by-Step)](#15-implementation-order-step-by-step)
16. [UI Component Library](#16-ui-component-library)
17. [Environment Variables](#17-environment-variables)

---

## 1. Project Architecture

```
Browser (Web Dashboard)
    │
    ▼
Next.js 16 App Router (Frontend + API Routes)
    │
    ├── Server Components (Dashboard Pages)
    ├── Client Components (Interactive UI)
    ├── API Routes (/api/*)
    │
    ▼
Prisma ORM
    │
    ▼
PostgreSQL Database
    │
    ├── Redis (Session Cache + Real-time Data)
    └── AWS S3 / Cloudinary (File Uploads)
```

**Key Decisions:**
- Server Components by default, Client Components sirf jahan interactivity zaruri hai
- API Routes Next.js ke andar hi — alag backend nahi chahiye for web dashboard
- Prisma ORM for type-safe database access
- Role-Based Access Control (RBAC) har route par

---

## 2. Folder Structure

```
src/
├── app/
│   ├── (auth)/                    # Auth pages (login, forgot-password)
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── forgot-password/
│   │   │   └── page.tsx
│   │   └── layout.tsx             # Auth layout (no sidebar)
│   │
│   ├── (dashboard)/               # Protected dashboard pages
│   │   ├── layout.tsx             # Dashboard layout (sidebar + topbar)
│   │   ├── page.tsx               # Dashboard home / overview
│   │   │
│   │   ├── field-force/           # Module 1: Field Force
│   │   │   ├── page.tsx           # Reps listing
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx       # Rep detail + activity
│   │   │   ├── doctors/
│   │   │   │   ├── page.tsx       # Doctors master list
│   │   │   │   └── [id]/page.tsx  # Doctor detail
│   │   │   ├── visits/
│   │   │   │   └── page.tsx       # Visit reports / DCR
│   │   │   ├── samples/
│   │   │   │   └── page.tsx       # Sample distribution
│   │   │   └── call-plans/
│   │   │       └── page.tsx       # Call plan management
│   │   │
│   │   ├── orders/                # Module 2: Order Management
│   │   │   ├── page.tsx           # All orders list
│   │   │   ├── [id]/page.tsx      # Order detail
│   │   │   ├── new/page.tsx       # Create new order
│   │   │   ├── returns/page.tsx   # Return orders
│   │   │   └── approvals/page.tsx # Order approvals
│   │   │
│   │   ├── distribution/          # Module 3: DMS
│   │   │   ├── page.tsx           # Distribution overview
│   │   │   ├── primary/page.tsx   # Primary orders (company → distributor)
│   │   │   ├── secondary/page.tsx # Secondary orders (distributor → pharmacy)
│   │   │   ├── stock/page.tsx     # Stock visibility
│   │   │   ├── invoices/page.tsx  # Invoice management
│   │   │   └── payments/page.tsx  # Payment tracking
│   │   │
│   │   ├── routes/                # Module 4: RTM
│   │   │   ├── page.tsx           # Route overview + map
│   │   │   ├── territories/page.tsx
│   │   │   ├── pjp/page.tsx       # Permanent Journey Plans
│   │   │   └── outlets/page.tsx   # Outlet/Doctor geo-mapping
│   │   │
│   │   ├── merchandising/         # Module 5: Shelf Management
│   │   │   ├── page.tsx           # Overview
│   │   │   ├── audits/page.tsx    # Shelf audits
│   │   │   ├── planograms/page.tsx
│   │   │   └── competitors/page.tsx
│   │   │
│   │   ├── analytics/             # Module 6: BI Dashboard
│   │   │   ├── page.tsx           # Main analytics dashboard
│   │   │   ├── sales/page.tsx     # Sales KPI dashboard
│   │   │   ├── reps/page.tsx      # Rep performance
│   │   │   ├── products/page.tsx  # Product analytics
│   │   │   ├── territories/page.tsx
│   │   │   └── reports/page.tsx   # Custom report builder
│   │   │
│   │   ├── hr/                    # Module 7: HR & Attendance
│   │   │   ├── page.tsx           # HR overview
│   │   │   ├── attendance/page.tsx
│   │   │   ├── expenses/page.tsx  # Expense claims
│   │   │   ├── leaves/page.tsx
│   │   │   └── tours/page.tsx     # Tour programs
│   │   │
│   │   ├── settings/              # Module 8: Admin Config
│   │   │   ├── page.tsx           # Settings overview
│   │   │   ├── users/page.tsx     # User management
│   │   │   ├── roles/page.tsx     # Roles & permissions
│   │   │   ├── products/page.tsx  # Product/SKU master
│   │   │   ├── territories/page.tsx
│   │   │   ├── notifications/page.tsx
│   │   │   ├── integrations/page.tsx
│   │   │   └── audit-logs/page.tsx
│   │   │
│   │   └── live-tracking/         # Real-time Map
│   │       └── page.tsx
│   │
│   ├── api/                       # API Routes
│   │   ├── auth/[...nextauth]/route.ts
│   │   ├── field-force/
│   │   ├── orders/
│   │   ├── distribution/
│   │   ├── routes/
│   │   ├── merchandising/
│   │   ├── analytics/
│   │   ├── hr/
│   │   ├── settings/
│   │   └── upload/route.ts
│   │
│   ├── globals.css
│   └── layout.tsx                 # Root layout
│
├── components/
│   ├── ui/                        # Reusable UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── table.tsx
│   │   ├── modal.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── tabs.tsx
│   │   ├── dropdown.tsx
│   │   ├── date-picker.tsx
│   │   ├── data-table.tsx         # Advanced table with sorting/filtering
│   │   ├── chart.tsx              # Chart wrapper
│   │   └── file-upload.tsx
│   │
│   ├── layout/
│   │   ├── sidebar.tsx
│   │   ├── topbar.tsx
│   │   ├── breadcrumb.tsx
│   │   └── mobile-nav.tsx
│   │
│   ├── dashboard/
│   │   ├── stats-card.tsx
│   │   ├── recent-orders.tsx
│   │   ├── team-activity.tsx
│   │   └── sales-chart.tsx
│   │
│   └── maps/
│       ├── live-tracking-map.tsx
│       └── route-map.tsx
│
├── lib/
│   ├── db.ts                      # Prisma client instance
│   ├── auth.ts                    # NextAuth config
│   ├── utils.ts                   # Utility functions
│   ├── validations/               # Zod schemas
│   │   ├── order.ts
│   │   ├── user.ts
│   │   ├── doctor.ts
│   │   └── ...
│   └── constants.ts               # App constants, roles, etc.
│
├── hooks/
│   ├── use-debounce.ts
│   ├── use-pagination.ts
│   └── use-permission.ts
│
├── types/
│   └── index.ts                   # Shared TypeScript types
│
└── middleware.ts                   # Auth + RBAC middleware
```

---

## 3. Database Schema

### Core Tables (Prisma Schema)

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ==========================================
// AUTH & USER MANAGEMENT
// ==========================================

enum UserRole {
  ADMIN
  REGIONAL_MANAGER
  AREA_SALES_MANAGER
  MEDICAL_REP
  DISTRIBUTOR
  PHARMA_CLIENT
}

enum UserStatus {
  ACTIVE
  INACTIVE
  SUSPENDED
}

model User {
  id            String     @id @default(cuid())
  email         String     @unique
  password      String
  name          String
  phone         String?
  avatar        String?
  role          UserRole
  status        UserStatus @default(ACTIVE)
  territoryId   String?
  territory     Territory? @relation(fields: [territoryId], references: [id])
  managerId     String?
  manager       User?      @relation("ManagerSubordinates", fields: [managerId], references: [id])
  subordinates  User[]     @relation("ManagerSubordinates")
  createdAt     DateTime   @default(now())
  updatedAt     DateTime   @updatedAt

  // Relations
  visits        Visit[]
  orders        Order[]
  expenses      Expense[]
  attendances   Attendance[]
  callPlans     CallPlan[]
  auditLogs     AuditLog[]

  @@index([role])
  @@index([territoryId])
  @@index([managerId])
}

// ==========================================
// TERRITORY & GEOGRAPHY
// ==========================================

model Territory {
  id          String      @id @default(cuid())
  name        String
  code        String      @unique
  parentId    String?
  parent      Territory?  @relation("TerritoryHierarchy", fields: [parentId], references: [id])
  children    Territory[] @relation("TerritoryHierarchy")
  level       Int         // 1=Region, 2=Area, 3=Zone
  users       User[]
  doctors     Doctor[]
  outlets     Outlet[]
  routes      Route[]
  createdAt   DateTime    @default(now())

  @@index([parentId])
  @@index([level])
}

// ==========================================
// DOCTOR & OUTLET MANAGEMENT
// ==========================================

enum DoctorCategory {
  A_PLUS   // Highest value
  A
  B
  C
}

model Doctor {
  id              String         @id @default(cuid())
  name            String
  specialization  String
  phone           String?
  email           String?
  address         String?
  latitude        Float?
  longitude       Float?
  category        DoctorCategory @default(B)
  hospitalName    String?
  territoryId     String?
  territory       Territory?     @relation(fields: [territoryId], references: [id])
  isActive        Boolean        @default(true)
  createdAt       DateTime       @default(now())
  updatedAt       DateTime       @updatedAt

  visits          Visit[]
  samples         SampleDistribution[]
  prescriptions   Prescription[]

  @@index([territoryId])
  @@index([specialization])
  @@index([category])
}

model Outlet {
  id            String     @id @default(cuid())
  name          String
  type          String     // Pharmacy, Hospital, Clinic
  address       String
  latitude      Float?
  longitude     Float?
  phone         String?
  ownerName     String?
  territoryId   String?
  territory     Territory? @relation(fields: [territoryId], references: [id])
  isActive      Boolean    @default(true)
  createdAt     DateTime   @default(now())

  orders        Order[]
  shelfAudits   ShelfAudit[]

  @@index([territoryId])
  @@index([type])
}

// ==========================================
// FIELD FORCE — VISITS & DCR
// ==========================================

enum VisitStatus {
  PLANNED
  CHECKED_IN
  COMPLETED
  MISSED
  CANCELLED
}

model Visit {
  id              String      @id @default(cuid())
  repId           String
  rep             User        @relation(fields: [repId], references: [id])
  doctorId        String
  doctor          Doctor      @relation(fields: [doctorId], references: [id])
  visitDate       DateTime
  status          VisitStatus @default(PLANNED)
  checkInTime     DateTime?
  checkOutTime    DateTime?
  checkInLat      Float?
  checkInLng      Float?
  checkOutLat     Float?
  checkOutLng     Float?
  detailingNotes  String?     // What rep discussed with doctor
  doctorFeedback  String?
  nextVisitDate   DateTime?
  createdAt       DateTime    @default(now())

  samples         SampleDistribution[]

  @@index([repId])
  @@index([doctorId])
  @@index([visitDate])
  @@index([status])
}

model SampleDistribution {
  id          String   @id @default(cuid())
  visitId     String
  visit       Visit    @relation(fields: [visitId], references: [id])
  doctorId    String
  doctor      Doctor   @relation(fields: [doctorId], references: [id])
  productId   String
  product     Product  @relation(fields: [productId], references: [id])
  quantity    Int
  createdAt   DateTime @default(now())

  @@index([visitId])
  @@index([doctorId])
}

model CallPlan {
  id          String   @id @default(cuid())
  repId       String
  rep         User     @relation(fields: [repId], references: [id])
  planDate    DateTime
  doctorIds   String[] // Array of doctor IDs for the day
  routeId     String?
  route       Route?   @relation(fields: [routeId], references: [id])
  isApproved  Boolean  @default(false)
  createdAt   DateTime @default(now())

  @@index([repId])
  @@index([planDate])
}

// ==========================================
// PRODUCTS & SKU
// ==========================================

model Product {
  id            String    @id @default(cuid())
  name          String
  sku           String    @unique
  genericName   String?
  category      String?   // Tablet, Syrup, Injection, etc.
  brand         String?
  unitPrice     Float
  packSize      String?   // e.g., "10 tablets/strip"
  isActive      Boolean   @default(true)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  orderItems    OrderItem[]
  samples       SampleDistribution[]
  stockEntries  Stock[]
  schemes       Scheme[]

  @@index([sku])
  @@index([category])
}

model Scheme {
  id            String   @id @default(cuid())
  name          String
  productId     String
  product       Product  @relation(fields: [productId], references: [id])
  discountType  String   // PERCENTAGE, FLAT, BUY_X_GET_Y
  discountValue Float
  minQuantity   Int?
  startDate     DateTime
  endDate       DateTime
  isActive      Boolean  @default(true)
  createdAt     DateTime @default(now())

  @@index([productId])
  @@index([startDate, endDate])
}

// ==========================================
// ORDER MANAGEMENT
// ==========================================

enum OrderStatus {
  DRAFT
  PENDING
  APPROVED
  DISPATCHED
  DELIVERED
  CANCELLED
  RETURNED
}

enum OrderType {
  PRIMARY    // Company → Distributor
  SECONDARY  // Distributor → Pharmacy
  FIELD      // Field rep order
}

model Order {
  id              String      @id @default(cuid())
  orderNumber     String      @unique
  type            OrderType
  status          OrderStatus @default(PENDING)
  repId           String?
  rep             User?       @relation(fields: [repId], references: [id])
  outletId        String?
  outlet          Outlet?     @relation(fields: [outletId], references: [id])
  distributorId   String?
  distributor     Distributor? @relation(fields: [distributorId], references: [id])
  subtotal        Float
  discount        Float       @default(0)
  tax             Float       @default(0)
  totalAmount     Float
  notes           String?
  approvedBy      String?
  approvedAt      DateTime?
  dispatchedAt    DateTime?
  deliveredAt     DateTime?
  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt

  items           OrderItem[]
  invoice         Invoice?

  @@index([status])
  @@index([repId])
  @@index([outletId])
  @@index([distributorId])
  @@index([createdAt])
}

model OrderItem {
  id          String  @id @default(cuid())
  orderId     String
  order       Order   @relation(fields: [orderId], references: [id], onDelete: Cascade)
  productId   String
  product     Product @relation(fields: [productId], references: [id])
  quantity    Int
  unitPrice   Float
  discount    Float   @default(0)
  totalPrice  Float
  batchNumber String?

  @@index([orderId])
}

// ==========================================
// DISTRIBUTION MANAGEMENT
// ==========================================

model Distributor {
  id            String   @id @default(cuid())
  name          String
  code          String   @unique
  address       String?
  phone         String?
  email         String?
  creditLimit   Float    @default(0)
  currentCredit Float    @default(0)
  isActive      Boolean  @default(true)
  createdAt     DateTime @default(now())

  orders        Order[]
  stocks        Stock[]
  invoices      Invoice[]
  payments      Payment[]

  @@index([code])
}

model Stock {
  id              String      @id @default(cuid())
  distributorId   String
  distributor     Distributor @relation(fields: [distributorId], references: [id])
  productId       String
  product         Product     @relation(fields: [productId], references: [id])
  quantity        Int
  batchNumber     String?
  expiryDate      DateTime?
  lastUpdated     DateTime    @default(now())

  @@unique([distributorId, productId, batchNumber])
  @@index([distributorId])
  @@index([productId])
}

model Invoice {
  id            String      @id @default(cuid())
  invoiceNumber String      @unique
  orderId       String      @unique
  order         Order       @relation(fields: [orderId], references: [id])
  distributorId String
  distributor   Distributor @relation(fields: [distributorId], references: [id])
  amount        Float
  dueDate       DateTime
  isPaid        Boolean     @default(false)
  paidAt        DateTime?
  createdAt     DateTime    @default(now())

  payments      Payment[]

  @@index([distributorId])
  @@index([isPaid])
}

model Payment {
  id            String      @id @default(cuid())
  invoiceId     String
  invoice       Invoice     @relation(fields: [invoiceId], references: [id])
  distributorId String
  distributor   Distributor @relation(fields: [distributorId], references: [id])
  amount        Float
  method        String      // BANK_TRANSFER, CHEQUE, CASH, ONLINE
  reference     String?
  paidAt        DateTime    @default(now())

  @@index([invoiceId])
  @@index([distributorId])
}

// ==========================================
// ROUTE-TO-MARKET
// ==========================================

model Route {
  id            String     @id @default(cuid())
  name          String
  territoryId   String
  territory     Territory  @relation(fields: [territoryId], references: [id])
  waypoints     Json       // Array of {lat, lng, outletId, order}
  totalDistance  Float?     // in km
  isActive      Boolean    @default(true)
  createdAt     DateTime   @default(now())

  callPlans     CallPlan[]

  @@index([territoryId])
}

// ==========================================
// MERCHANDISING
// ==========================================

model ShelfAudit {
  id              String   @id @default(cuid())
  outletId        String
  outlet          Outlet   @relation(fields: [outletId], references: [id])
  auditDate       DateTime
  auditorId       String
  photoUrls       String[] // Array of photo URLs
  shareOfShelf    Float?   // Percentage
  isCompliant     Boolean  @default(false)
  outOfStock      Boolean  @default(false)
  competitorNotes String?
  createdAt       DateTime @default(now())

  @@index([outletId])
  @@index([auditDate])
}

// ==========================================
// HR & ATTENDANCE
// ==========================================

enum AttendanceType {
  PRESENT
  ABSENT
  LEAVE
  HALF_DAY
  TOUR
}

model Attendance {
  id            String         @id @default(cuid())
  userId        String
  user          User           @relation(fields: [userId], references: [id])
  date          DateTime
  type          AttendanceType @default(PRESENT)
  checkInTime   DateTime?
  checkOutTime  DateTime?
  checkInLat    Float?
  checkInLng    Float?
  totalHours    Float?
  createdAt     DateTime       @default(now())

  @@unique([userId, date])
  @@index([userId])
  @@index([date])
}

enum ExpenseStatus {
  PENDING
  APPROVED
  REJECTED
}

model Expense {
  id          String        @id @default(cuid())
  userId      String
  user        User          @relation(fields: [userId], references: [id])
  date        DateTime
  category    String        // FUEL, FOOD, HOTEL, TRANSPORT, OTHER
  amount      Float
  description String?
  receiptUrl  String?
  status      ExpenseStatus @default(PENDING)
  approvedBy  String?
  approvedAt  DateTime?
  createdAt   DateTime      @default(now())

  @@index([userId])
  @@index([status])
  @@index([date])
}

// ==========================================
// PRESCRIPTION TRACKING
// ==========================================

model Prescription {
  id          String   @id @default(cuid())
  doctorId    String
  doctor      Doctor   @relation(fields: [doctorId], references: [id])
  productId   String
  month       DateTime // Track by month
  rxCount     Int      // Number of prescriptions
  createdAt   DateTime @default(now())

  @@unique([doctorId, productId, month])
  @@index([doctorId])
}

// ==========================================
// NOTIFICATIONS & AUDIT
// ==========================================

model Notification {
  id        String   @id @default(cuid())
  userId    String
  title     String
  message   String
  type      String   // ORDER, VISIT, ALERT, SYSTEM
  isRead    Boolean  @default(false)
  link      String?
  createdAt DateTime @default(now())

  @@index([userId])
  @@index([isRead])
}

model AuditLog {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  action    String   // CREATE, UPDATE, DELETE, LOGIN, LOGOUT
  entity    String   // Order, User, Doctor, etc.
  entityId  String?
  oldData   Json?
  newData   Json?
  ipAddress String?
  createdAt DateTime @default(now())

  @@index([userId])
  @@index([entity])
  @@index([createdAt])
}
```

---

## 4. Authentication & Authorization

### Roles & Permissions Matrix

| Permission                | Admin | Regional Mgr | ASM  | Med Rep | Distributor | Pharma Client |
|---------------------------|-------|-------------|------|---------|-------------|---------------|
| User Management           | ✅    | ❌          | ❌   | ❌      | ❌          | ❌            |
| System Config             | ✅    | ❌          | ❌   | ❌      | ❌          | ❌            |
| View All Territories      | ✅    | ✅          | ❌   | ❌      | ❌          | ✅            |
| View Own Territory        | ✅    | ✅          | ✅   | ✅      | ❌          | ✅            |
| Manage Field Force        | ✅    | ✅          | ✅   | ❌      | ❌          | ❌            |
| View Visit Reports        | ✅    | ✅          | ✅   | Own     | ❌          | ✅            |
| Create Orders             | ✅    | ❌          | ❌   | ✅      | ✅          | ❌            |
| Approve Orders            | ✅    | ✅          | ✅   | ❌      | ✅          | ❌            |
| View Distribution         | ✅    | ✅          | ✅   | ❌      | Own         | ✅            |
| Manage Stock              | ✅    | ❌          | ❌   | ❌      | Own         | ❌            |
| View Analytics            | ✅    | ✅          | ✅   | Own     | Own         | ✅            |
| Approve Expenses          | ✅    | ✅          | ✅   | ❌      | ❌          | ❌            |
| Live Tracking             | ✅    | ✅          | ✅   | ❌      | ❌          | ✅            |
| Audit Logs                | ✅    | ❌          | ❌   | ❌      | ❌          | ❌            |

### Implementation Approach

```
src/middleware.ts
├── Check if user is authenticated (NextAuth session)
├── Check route-based permissions
└── Redirect to login if unauthorized

src/lib/auth.ts
├── NextAuth configuration
├── Credentials provider (email + password)
├── JWT strategy with role embedded
└── Session callback with user role + territory

src/hooks/use-permission.ts
├── Hook to check permissions in components
└── hasPermission(action, resource) → boolean
```

---

## 5. Module 1: Admin & Configuration Panel

### Pages to Build

| Page | Route | Description |
|------|-------|-------------|
| User Management | `/settings/users` | CRUD users, assign roles, territories |
| Role Management | `/settings/roles` | View roles, permissions matrix |
| Product Master | `/settings/products` | Add/edit products, SKUs, pricing |
| Territory Setup | `/settings/territories` | Create territory hierarchy (Region → Area → Zone) |
| Notifications Config | `/settings/notifications` | Configure alert rules |
| Integrations | `/settings/integrations` | API keys, webhook URLs |
| Audit Logs | `/settings/audit-logs` | Searchable activity log |

### Key Features

**User Management Page:**
- DataTable with search, filter by role/status/territory
- Create user form: name, email, password, role, territory, manager assignment
- Bulk import via CSV
- Activate/deactivate users
- Reset password

**Product Master Page:**
- Product list with search/filter by category
- Create/edit product: name, SKU, generic name, category, unit price, pack size
- Manage discount schemes per product
- Import/export product catalog

**Territory Setup Page:**
- Tree view showing Region → Area → Zone hierarchy
- Drag-and-drop territory assignment
- Map view showing territory boundaries
- Assign users to territories

---

## 6. Module 2: Field Force Management

### Pages to Build

| Page | Route | Description |
|------|-------|-------------|
| Reps List | `/field-force` | All reps with status, today's activity |
| Rep Detail | `/field-force/[id]` | Rep profile, visits, performance |
| Doctors Master | `/field-force/doctors` | Doctor database |
| Doctor Detail | `/field-force/doctors/[id]` | Doctor profile, visit history, Rx data |
| Visit Reports | `/field-force/visits` | DCR — all visits with filters |
| Sample Tracking | `/field-force/samples` | Sample distribution records |
| Call Plans | `/field-force/call-plans` | Daily/weekly call plans |

### Key Features

**Reps List Page:**
- DataTable: Rep name, territory, today's visits (done/total), last check-in time, status
- Filter by territory, status
- Quick actions: view detail, view on map

**Doctor Master Page:**
- DataTable: Name, specialization, category (A+/A/B/C), territory, total visits, last visit
- Create/edit doctor with geo-location
- Import doctors from CSV
- Category-wise color coding

**Visit Reports (DCR) Page:**
- Date range filter, rep filter, territory filter, status filter
- Table: Date, Rep, Doctor, Check-in/out times, Duration, Detailing notes, Samples given
- Export to Excel/PDF
- Click to see visit detail with map showing check-in location

**Call Plan Page:**
- Calendar view showing planned visits
- Create plan: select rep, date, add doctors from list
- Route optimization suggestion
- Approve/reject plans (for managers)

---

## 7. Module 3: Order Management System

### Pages to Build

| Page | Route | Description |
|------|-------|-------------|
| All Orders | `/orders` | Complete order listing |
| Order Detail | `/orders/[id]` | Full order info, timeline, invoice |
| Create Order | `/orders/new` | New order form |
| Order Approvals | `/orders/approvals` | Pending orders for approval |
| Returns | `/orders/returns` | Return order management |

### Key Features

**Orders List Page:**
- DataTable: Order#, Date, Rep, Outlet, Status, Total Amount
- Filter by status, date range, rep, territory
- Status badges: Draft(grey), Pending(yellow), Approved(blue), Dispatched(purple), Delivered(green), Cancelled(red)
- Bulk approve/reject

**Create Order Page:**
- Step 1: Select outlet/pharmacy
- Step 2: Add products (search, select, set quantity)
- Step 3: Auto-apply discount schemes, show totals
- Step 4: Review & submit
- Auto-calculate: subtotal, scheme discounts, tax, grand total

**Order Detail Page:**
- Order info header (number, date, status, amounts)
- Items table with pricing breakdown
- Status timeline (created → approved → dispatched → delivered)
- Actions: Approve, Reject, Dispatch, Mark Delivered
- Linked invoice and payment status

**Order Approval Page:**
- Cards/list of pending orders
- Quick approve/reject with optional notes
- Batch approve selected orders

---

## 8. Module 4: Distribution Management (DMS)

### Pages to Build

| Page | Route | Description |
|------|-------|-------------|
| DMS Overview | `/distribution` | Distribution summary, KPIs |
| Primary Orders | `/distribution/primary` | Company → Distributor orders |
| Secondary Orders | `/distribution/secondary` | Distributor → Pharmacy orders |
| Stock Visibility | `/distribution/stock` | Distributor-wise stock levels |
| Invoices | `/distribution/invoices` | Invoice management |
| Payments | `/distribution/payments` | Payment tracking |

### Key Features

**Stock Visibility Page:**
- Distributor selector dropdown
- Product-wise stock table: Product, SKU, Quantity, Batch, Expiry
- Low stock alerts (highlighted rows)
- Stock aging report
- Export stock report

**Invoice Page:**
- Invoice list: Invoice#, Order#, Distributor, Amount, Due Date, Status (Paid/Unpaid/Overdue)
- Overdue invoices highlighted in red
- Generate invoice PDF
- Record payment against invoice

**Payment Tracking:**
- Payment history with filters
- Outstanding amount per distributor
- Credit limit vs current credit utilization chart
- Payment aging report

---

## 9. Module 5: Route-to-Market (RTM)

### Pages to Build

| Page | Route | Description |
|------|-------|-------------|
| Route Overview | `/routes` | All routes on interactive map |
| Territory Map | `/routes/territories` | Territory boundaries visualization |
| PJP Management | `/routes/pjp` | Permanent Journey Plans |
| Outlet Mapping | `/routes/outlets` | Geo-tagged outlets on map |

### Key Features

**Route Overview (Map Page):**
- Interactive Google Map showing all routes
- Click route to see waypoints, assigned rep, outlets
- Create new route: click points on map, assign outlets
- Calculate route distance and estimated travel time

**PJP Management:**
- Weekly calendar grid: rows = reps, columns = days
- Each cell shows planned doctor/outlet visits
- Drag-and-drop to reassign visits
- Copy PJP from previous week
- Compliance tracking: planned vs actual visits

**Live Tracking Page (`/live-tracking`):**
- Real-time map showing all active reps
- Rep markers with status (checked-in, traveling, idle)
- Click rep to see today's visit timeline
- Filter by territory
- Auto-refresh every 30 seconds

---

## 10. Module 6: Merchandising & Shelf Management

### Pages to Build

| Page | Route | Description |
|------|-------|-------------|
| Overview | `/merchandising` | Merchandising summary |
| Shelf Audits | `/merchandising/audits` | Audit records with photos |
| Planograms | `/merchandising/planograms` | Planogram compliance |
| Competitors | `/merchandising/competitors` | Competitor tracking |

### Key Features

**Shelf Audit Page:**
- List of audits: Date, Outlet, Auditor, Compliance %, OOS status
- Click to see audit detail with uploaded photos
- Photo gallery with zoom
- Compliance trend chart

**Competitor Tracking:**
- Competitor brand presence reports
- Share of shelf comparison charts
- Territory-wise competitor activity

---

## 11. Module 7: BI & Analytics Dashboard

### Pages to Build

| Page | Route | Description |
|------|-------|-------------|
| Main Dashboard | `/analytics` | Executive summary with key charts |
| Sales KPIs | `/analytics/sales` | Sales targets vs actuals |
| Rep Performance | `/analytics/reps` | Individual rep scorecards |
| Product Analytics | `/analytics/products` | Product-wise sales breakdown |
| Territory Analytics | `/analytics/territories` | Territory comparison |
| Report Builder | `/analytics/reports` | Custom report generator |

### Key Charts & Widgets

**Main Analytics Dashboard:**
1. **KPI Cards (Top Row):**
   - Total Sales (MTD), Total Orders, Active Reps, Doctor Coverage %

2. **Sales Trend Chart:**
   - Line chart: Daily/Weekly/Monthly sales over time
   - Compare with previous period

3. **Territory Heatmap:**
   - Map with color-coded territories by sales volume

4. **Top 10 Products:**
   - Bar chart: Revenue by product

5. **Rep Leaderboard:**
   - Table: Top reps ranked by sales/visits

6. **Order Status Breakdown:**
   - Donut chart: Orders by status

7. **Doctor Coverage:**
   - Gauge chart: % doctors visited this month vs target

**Sales KPI Page:**
- Target vs Actual by territory (grouped bar chart)
- Achievement % with color coding
- Daily sales trend
- Filter by product, territory, rep, date range

**Rep Performance Page:**
- Rep scorecard: Visits done, orders placed, sales value, doctor coverage
- Comparison table across reps
- Individual rep drill-down: daily activity timeline

**Custom Report Builder:**
- Select metrics (sales, visits, orders, stock)
- Select dimensions (territory, product, rep, time)
- Select filters
- Preview table/chart
- Export to Excel/PDF

---

## 12. Module 8: HR & Attendance

### Pages to Build

| Page | Route | Description |
|------|-------|-------------|
| HR Overview | `/hr` | Attendance summary, pending approvals |
| Attendance | `/hr/attendance` | Daily attendance records |
| Expenses | `/hr/expenses` | Expense claims management |
| Leaves | `/hr/leaves` | Leave requests |
| Tour Programs | `/hr/tours` | Tour plan approvals |

### Key Features

**Attendance Page:**
- Calendar view: color-coded days (green=present, red=absent, yellow=leave, blue=tour)
- Daily list view: Rep, Check-in time, Check-out time, Location, Total hours
- Monthly attendance summary with export
- GPS location verification flag

**Expense Management Page:**
- Expense list: Date, Rep, Category, Amount, Status, Receipt
- Filter by status (pending/approved/rejected), date range, rep
- Approve/reject with comments
- Monthly expense summary by category (pie chart)
- Click to view receipt image

---

## 13. Required Packages

### Install Command

```bash
# Core
npm install @prisma/client next-auth@beta bcryptjs jsonwebtoken zod

# UI Components
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-select @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-tooltip @radix-ui/react-checkbox @radix-ui/react-popover @radix-ui/react-avatar
npm install class-variance-authority clsx tailwind-merge lucide-react

# Data Table
npm install @tanstack/react-table

# Charts
npm install recharts

# Date Handling
npm install date-fns react-day-picker

# Forms
npm install react-hook-form @hookform/resolvers

# Maps (for live tracking & routes)
npm install @react-google-maps/api

# File Upload
npm install uploadthing @uploadthing/react

# PDF/Excel Export
npm install jspdf jspdf-autotable xlsx

# Dev Dependencies
npm install -D prisma @types/bcryptjs
```

---

## 14. API Routes Structure

```
src/app/api/
│
├── auth/
│   └── [...nextauth]/route.ts      # NextAuth handler
│
├── users/
│   ├── route.ts                     # GET (list), POST (create)
│   └── [id]/route.ts               # GET, PUT, DELETE
│
├── doctors/
│   ├── route.ts                     # GET (list), POST (create)
│   ├── [id]/route.ts               # GET, PUT, DELETE
│   └── import/route.ts             # POST (CSV import)
│
├── outlets/
│   ├── route.ts
│   └── [id]/route.ts
│
├── visits/
│   ├── route.ts                     # GET (list), POST (create)
│   ├── [id]/route.ts               # GET, PUT
│   └── [id]/check-in/route.ts      # POST (check-in)
│   └── [id]/check-out/route.ts     # POST (check-out)
│
├── call-plans/
│   ├── route.ts
│   ├── [id]/route.ts
│   └── [id]/approve/route.ts       # POST
│
├── products/
│   ├── route.ts
│   ├── [id]/route.ts
│   └── import/route.ts
│
├── schemes/
│   ├── route.ts
│   └── [id]/route.ts
│
├── orders/
│   ├── route.ts                     # GET, POST
│   ├── [id]/route.ts               # GET, PUT
│   ├── [id]/approve/route.ts       # POST
│   ├── [id]/dispatch/route.ts      # POST
│   ├── [id]/deliver/route.ts       # POST
│   └── [id]/cancel/route.ts        # POST
│
├── distributors/
│   ├── route.ts
│   └── [id]/route.ts
│
├── stock/
│   ├── route.ts                     # GET (list with filters)
│   └── update/route.ts             # POST (bulk update)
│
├── invoices/
│   ├── route.ts
│   ├── [id]/route.ts
│   └── [id]/pdf/route.ts           # GET (generate PDF)
│
├── payments/
│   ├── route.ts
│   └── [id]/route.ts
│
├── routes/
│   ├── route.ts
│   └── [id]/route.ts
│
├── territories/
│   ├── route.ts
│   └── [id]/route.ts
│
├── attendance/
│   ├── route.ts
│   └── [id]/route.ts
│
├── expenses/
│   ├── route.ts
│   ├── [id]/route.ts
│   └── [id]/approve/route.ts
│
├── analytics/
│   ├── sales/route.ts              # GET (sales data with filters)
│   ├── reps/route.ts               # GET (rep performance)
│   ├── products/route.ts           # GET (product analytics)
│   ├── territories/route.ts        # GET (territory analytics)
│   └── dashboard/route.ts          # GET (dashboard KPIs)
│
├── shelf-audits/
│   ├── route.ts
│   └── [id]/route.ts
│
├── notifications/
│   ├── route.ts                     # GET (user's notifications)
│   └── [id]/read/route.ts          # POST (mark read)
│
├── audit-logs/
│   └── route.ts                     # GET (searchable logs)
│
└── upload/
    └── route.ts                     # POST (file upload handler)
```

---

## 15. Implementation Order (Step-by-Step)

### Phase 1: Foundation (Week 1-2)

```
Step 1: Project Setup
├── Install all packages
├── Setup Prisma + PostgreSQL
├── Run prisma migrate
├── Setup NextAuth (credentials provider)
├── Create middleware.ts for auth protection
└── Setup environment variables

Step 2: Layout & Navigation
├── Create (auth) layout — login page
├── Create (dashboard) layout — sidebar + topbar
├── Build sidebar with all module links
├── Build topbar with user menu, notifications bell
├── Create breadcrumb component
└── Mobile responsive navigation

Step 3: UI Component Library
├── Setup shadcn/ui inspired components
├── Button, Input, Select, Modal, Card, Badge, Tabs
├── DataTable component (with TanStack Table)
├── Form components with react-hook-form
├── Toast notifications
└── Loading states & skeletons
```

### Phase 2: Admin + Core Setup (Week 3-4)

```
Step 4: Admin Panel (Settings)
├── User management CRUD
├── Role display page
├── Product/SKU master CRUD
├── Territory hierarchy CRUD (tree view)
├── Audit logs page (read-only, searchable)
└── Seed data script for initial setup

Step 5: Doctor & Outlet Management
├── Doctor master CRUD with search/filter
├── Outlet master CRUD
├── CSV import for doctors
├── Geo-location fields
└── Category management
```

### Phase 3: Field Force + Orders (Week 5-8)

```
Step 6: Field Force Module
├── Reps listing page
├── Rep detail page with activity feed
├── Visit reports (DCR) page
├── Visit detail with map
├── Sample distribution tracking
├── Call plan management (calendar view)
└── Call plan approval workflow

Step 7: Order Management
├── Orders listing with filters
├── Create order (multi-step form)
├── Discount scheme auto-apply logic
├── Order detail page with timeline
├── Order approval workflow
├── Return order handling
└── Order status change APIs

Step 8: Distribution Management
├── Distributor management
├── Primary/Secondary order tracking
├── Stock visibility dashboard
├── Invoice generation
├── Payment recording & tracking
├── Credit limit management
└── Low stock alerts
```

### Phase 4: RTM + Merchandising (Week 9-12)

```
Step 9: Route-to-Market
├── Google Maps integration
├── Route creation tool (map-based)
├── Territory visualization on map
├── PJP management (weekly calendar)
├── Outlet geo-mapping
└── Route compliance tracking

Step 10: Live Tracking
├── Real-time map with rep markers
├── Auto-refresh mechanism
├── Rep status indicators
├── Click-to-see-activity panel
└── Territory filter

Step 11: Merchandising
├── Shelf audit listing
├── Photo gallery component
├── Planogram compliance view
├── Competitor tracking
└── Share of shelf charts
```

### Phase 5: Analytics + HR (Week 13-16)

```
Step 12: BI Dashboard
├── Main dashboard with KPI cards
├── Sales trend charts (Recharts)
├── Territory heatmap
├── Rep leaderboard
├── Product performance charts
├── Doctor coverage metrics
└── Custom report builder (basic)

Step 13: HR Module
├── Attendance tracking page
├── Calendar view component
├── Expense claim management
├── Expense approval workflow
├── Leave management
├── Tour program approval
└── Monthly summary reports

Step 14: Reports & Export
├── Excel export (xlsx)
├── PDF export (jspdf)
├── Invoice PDF generation
├── Scheduled report email (optional)
└── Report templates
```

### Phase 6: Polish & Deploy (Week 17-18)

```
Step 15: Final Polish
├── Notification system (in-app)
├── Global search
├── Keyboard shortcuts
├── Error boundaries
├── Loading states everywhere
├── Empty states with illustrations
└── Mobile responsiveness audit

Step 16: Testing & Deployment
├── API testing
├── UI testing (critical flows)
├── Performance optimization
├── Vercel / AWS deployment
├── Database hosting setup
├── Environment configuration
└── Production monitoring setup
```

---

## 16. UI Component Library

Use **shadcn/ui** pattern — copy components into your project, fully customizable:

### Color Scheme (Pharma Theme)

```css
/* globals.css — Tailwind CSS 4 custom theme */
@theme {
  --color-primary: #1e40af;       /* Blue - main brand */
  --color-primary-light: #3b82f6;
  --color-primary-dark: #1e3a8a;
  --color-secondary: #059669;     /* Green - success/health */
  --color-accent: #7c3aed;        /* Purple - highlights */
  --color-warning: #d97706;       /* Amber - warnings */
  --color-danger: #dc2626;        /* Red - errors */
  --color-sidebar: #0f172a;       /* Dark navy sidebar */
  --color-sidebar-text: #e2e8f0;
  --color-background: #f8fafc;    /* Light grey page bg */
  --color-card: #ffffff;
  --color-border: #e2e8f0;
}
```

### Key UI Patterns

| Pattern | Usage |
|---------|-------|
| DataTable | Every listing page (users, orders, doctors, etc.) |
| StatsCard | Dashboard KPI metrics |
| StatusBadge | Order status, visit status, expense status |
| Timeline | Order flow, visit flow |
| Modal/Dialog | Create/edit forms, confirmations |
| Sidebar Nav | Module-based navigation with icons |
| Breadcrumb | Page hierarchy navigation |
| DateRangePicker | Filtering reports by date |
| SearchInput | Global search + per-table search |
| FileUpload | Photos, receipts, CSV imports |

---

## 17. Environment Variables

```env
# .env.local

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/pharma_ffsms"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="your-google-maps-key"

# File Upload (Uploadthing or S3)
UPLOADTHING_SECRET="your-uploadthing-secret"
UPLOADTHING_APP_ID="your-uploadthing-app-id"

# OR AWS S3
# AWS_ACCESS_KEY_ID="xxx"
# AWS_SECRET_ACCESS_KEY="xxx"
# AWS_S3_BUCKET="pharma-ffsms-uploads"
# AWS_REGION="ap-south-1"

# Redis (optional — for caching)
# REDIS_URL="redis://localhost:6379"
```

---

## Quick Start Commands

```bash
# 1. Install dependencies
npm install

# 2. Setup Prisma
npx prisma init
# Copy schema from Section 3 into prisma/schema.prisma
npx prisma migrate dev --name init
npx prisma generate

# 3. Seed database (create admin user + sample data)
npx prisma db seed

# 4. Run development server
npm run dev
```

---

> **Note:** This document covers the complete web dashboard. Mobile app (React Native/Flutter) would be a separate project that consumes the same API routes defined here.
