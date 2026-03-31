"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font
} from "@react-pdf/renderer";

// Register Font
Font.register({
  family: 'Bai Jamjuree',
  fonts: [
    { src: '/fonts/BaiJamjuree-Regular.ttf' },
    { src: '/fonts/BaiJamjuree-Medium.ttf', fontWeight: 'bold' }
  ]
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Bai Jamjuree',
    fontSize: 11,
    color: '#000',
    display: 'flex',
    flexDirection: 'column',
  },
  headerBox: {
    border: '1.5pt solid #000',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  logo: { width: 80, height: 60, objectFit: 'contain' },
  titleContainer: { flex: 1, alignItems: 'center' },
  titleMain: { fontSize: 15, fontWeight: 'bold' },
  titleSub: { fontSize: 13, fontWeight: 'bold' },
  sectionHeader: { fontSize: 12, fontWeight: 'bold', textDecoration: 'underline', marginBottom: 5 },
  infoGrid: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 },
  infoItem: { width: '50%', flexDirection: 'row', marginBottom: 4, paddingRight: 10 },
  label: { fontWeight: 'bold', width: '35%' },
  valueField: { flex: 1, borderBottom: '0.5pt solid #000', paddingLeft: 4, minHeight: 12 },
  table: { border: '1pt solid #000', marginTop: 5 },
  tableHeader: {
    flexDirection: 'row',
    borderBottom: '1pt solid #000',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    textAlign: 'center',
    height: 50
  },
  tableRow: {
    flexDirection: 'row',
    borderBottom: '0.5pt solid #000',
    alignItems: 'stretch',
    minHeight: 25
  },
  colNo: { width: '8%', borderRight: '1pt solid #000', justifyContent: 'center', textAlign: 'center' },
  colList: { width: '37%', borderRight: '1pt solid #000', padding: 4, justifyContent: 'center' },
  colQty: { width: '10%', borderRight: '1pt solid #000', textAlign: 'center', justifyContent: 'center' },
  colReason: { width: '30%', borderRight: '1pt solid #000' },
  colRemark: { width: '15%', padding: 4, justifyContent: 'center' },
  reasonSubCol: {
    flex: 1,
    borderRight: '0.5pt solid #000',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 9,
  },
  signatureGrid: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 },
  signatureBox: { width: '48%', border: '1pt solid #000' },
  sigLabel: { textAlign: 'center', fontWeight: 'bold', borderBottom: '1pt solid #000', padding: 4 },
  sigBody: { height: 50, justifyContent: 'center', alignItems: 'center' },
  sigDate: { borderTop: '1pt solid #000', padding: 4, fontSize: 10 },
  auditSection: { marginTop: 15, borderTop: '1pt solid #000', paddingTop: 10 },
  auditRow: { flexDirection: 'row', marginBottom: 8, alignItems: 'flex-end' },
  auditLine: { borderBottom: '1pt solid #000', flex: 1, marginLeft: 5 },
  footerText: { position: 'absolute', bottom: 15, right: 30, fontSize: 10 }
});

interface BorrowRequisitionPDFProps {
  data: any;
  locale?: 'en' | 'th';
}

export function BorrowRequisitionPDF({ data, locale = 'th' }: BorrowRequisitionPDFProps) {
  const items = data?.requests || [];
  const requester = data?.user?.employee || {};

  const formatDate = (date: any) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString(locale === 'th' ? 'th-TH' : 'en-GB');
  };

  const labels = {
    titleMain: locale === 'th' ? "แบบฟอร์มขอเบิกใช้อุปกรณ์ IT" : "IT Equipment Request Form",
    titleSub: locale === 'th' ? "IT equipment request form" : "Requisition for IT Assets",
    no: locale === 'th' ? "เลขที่/No." : "No.",
    requesterSection: locale === 'th' ? "ส่วนของผู้เบิก" : "Requester Section",
    idCode: locale === 'th' ? "รหัส ID Code" : "ID Code",
    name: locale === 'th' ? "ชื่อ Name" : "Name",
    position: locale === 'th' ? "ตำแหน่ง Position" : "Position",
    dept: locale === 'th' ? "แผนก Department" : "Department",
    tel: locale === 'th' ? "เบอร์ติดต่อ Tel" : "Tel",
    reqDate: locale === 'th' ? "วันที่ขอเบิก Date For Request" : "Date For Request",
    useDate: locale === 'th' ? "วันที่ต้องการใช้ Date For Use" : "Date For Use",
    noCol: locale === 'th' ? "ลำดับ No." : "No.",
    listCol: locale === 'th' ? "รายการ/List" : "Item List",
    qtyCol: locale === 'th' ? "จำนวน Qty" : "Qty",
    reasonCol: locale === 'th' ? "เหตุผลของการเบิกใช้ Reasons" : "Reasons for Borrowing",
    new: locale === 'th' ? "ใหม่" : "New",
    broken: locale === 'th' ? "ชำรุด" : "Replace",
    other: locale === 'th' ? "อื่นๆ" : "Other",
    remarkCol: locale === 'th' ? "หมายเหตุ" : "Remarks",
    requester: locale === 'th' ? "ผู้ขอเบิก/Requester" : "Requester",
    approval: locale === 'th' ? "หัวหน้าแผนกอนุมัติ/Approval" : "Dept. Manager Approval",
    auditSection: locale === 'th' ? "ส่วนของฝ่ายจ่ายอุปกรณ์ IT/Audit and Disbursement Section" : "Audit and Disbursement Section",
    dateDisburse: locale === 'th' ? "วันที่จ่ายอุปกรณ์/Equipment disbursement date" : "Disbursement Date",
    disburser: locale === 'th' ? "ลงชื่อผู้จ่ายอุปกรณ์ไอที/IT Disburser" : "IT Disburser",
    remark: locale === 'th' ? "หมายเหตุ :" : "Remarks :",
    typeRequest: locale === 'th' ? "ประเภท" : "Type",
  };

  return (
    <Document title={`Request_${data?.group_code || 'BORROW'}`}>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerBox}>
          <Image src="/logo.png" style={styles.logo} />
          <View style={styles.titleContainer}>
            <Text style={styles.titleMain}>{labels.titleMain}</Text>
            <Text style={styles.titleSub}>{labels.titleSub}</Text>
          </View>
          <View style={{ width: 80, fontSize: 10 }}>
            <Text>{labels.no} ________</Text>
            <Text style={{ marginTop: 4, fontWeight: 'bold' }}>{data?.group_code}</Text>
            <Text style={{ marginTop: 4, fontSize: 8, color: '#666' }}>{labels.typeRequest}: {data?.type_request || (locale === 'th' ? 'เบิกอุปกรณ์ IT' : 'IT Requisition')}</Text>
          </View>
        </View>

        <Text style={styles.sectionHeader}>{labels.requesterSection}</Text>
        <View style={styles.infoGrid}>
          <View style={styles.infoItem}>
            <Text style={styles.label}>{labels.idCode}</Text>
            <Text style={styles.valueField}>{requester.employee_code || '-'}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>{labels.name}</Text>
            <Text style={styles.valueField}>{requester.employee_name_th || '-'}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>{labels.position}</Text>
            <Text style={styles.valueField}>{requester.position || '-'}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>{labels.dept}</Text>
            <Text style={styles.valueField}>{requester.department || '-'}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>{labels.tel}</Text>
            <Text style={styles.valueField}>........................</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>{labels.reqDate}</Text>
            <Text style={styles.valueField}>{formatDate(data?.createdAt)}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>{labels.useDate}</Text>
            <Text style={styles.valueField}>{data?.date_needed ? formatDate(data.date_needed) : '........................'}</Text>
          </View>
        </View>

        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <View style={styles.colNo}><Text>{labels.noCol}</Text></View>
            <View style={styles.colList}><Text>{labels.listCol}</Text></View>
            <View style={styles.colQty}><Text>{labels.qtyCol}</Text></View>
            <View style={styles.colReason}>
              <View style={{ borderBottom: '1pt solid #000', padding: 5, justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontSize: 9 }}>{labels.reasonCol}</Text></View>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <View style={styles.reasonSubCol}><Text>{labels.new}</Text></View>
                <View style={styles.reasonSubCol}><Text>{labels.broken}</Text></View>
                <View style={{ ...styles.reasonSubCol, borderRight: 0 }}><Text>{labels.other}</Text></View>
              </View>
            </View>
            <View style={styles.colRemark}><Text>{labels.remarkCol}</Text></View>
          </View>

          {items.map((item: any, idx: number) => (
            <View key={idx} style={styles.tableRow} wrap={false}>
              <View style={styles.colNo}><Text>{idx + 1}</Text></View>
              <View style={styles.colList}>
                <Text>{item.equipmentList?.equipmentEntry?.list || item.equipmentList?.equipmentEntry?.item_name}</Text>
              </View>
              <View style={styles.colQty}><Text>{item.quantity}</Text></View>
              <View style={styles.colReason}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <View style={styles.reasonSubCol}><Text>{item.borrow_type === 'NEW' ? '/' : ''}</Text></View>
                  <View style={styles.reasonSubCol}><Text>{item.borrow_type === 'BROKEN' ? '/' : ''}</Text></View>
                  <View style={{ ...styles.reasonSubCol, borderRight: 0 }}><Text>{item.borrow_type === 'OTHER' ? '/' : ''}</Text></View>
                </View>
              </View>
              <View style={styles.colRemark}><Text>{item.remarks || ""}</Text></View>
            </View>
          ))}
        </View>

        <View style={styles.signatureGrid}>
          <View style={styles.signatureBox}>
            <Text style={styles.sigLabel}>{labels.requester}</Text>
            <View style={styles.sigBody}>
               <Text style={{ fontSize: 11, fontWeight: 'bold' }}>{requester.employee_name_th || data?.user?.name || ''}</Text>
               <Text style={{ fontSize: 9, marginTop: 4 }}>................................................</Text>
            </View>
            <Text style={styles.sigDate}>Date : {formatDate(data?.createdAt)}</Text>
          </View>
          <View style={styles.signatureBox}>
            <Text style={styles.sigLabel}>{labels.approval}</Text>
            <View style={styles.sigBody}>
               <Text style={{ fontSize: 11, fontWeight: 'bold' }}>{data?.approval_status === 'APPROVED' ? data?.approval : ''}</Text>
               <Text style={{ fontSize: 9, marginTop: 4 }}>................................................</Text>
            </View>
            <Text style={styles.sigDate}>Date : {formatDate(data?.approval_date)}</Text>
          </View>
        </View>

        <View style={styles.auditSection}>
          <Text style={{ fontWeight: 'bold', textDecoration: 'underline' }}>{labels.auditSection}</Text>
          <View style={styles.auditRow}>
            <Text style={{ width: 180 }}>{labels.dateDisburse}</Text>
            <View style={styles.auditLine}>
               <Text style={{ paddingLeft: 10 }}>{data?.it_approval_status === 'APPROVED' ? formatDate(data.it_approval_date || data.updatedAt) : ''}</Text>
            </View>
          </View>
          <View style={styles.auditRow}>
            <Text style={{ width: 140 }}>{labels.disburser}</Text>
            <View style={styles.auditLine}>
               <Text style={{ paddingLeft: 10 }}>{data?.it_approval_status === 'APPROVED' ? data?.it_approval : ''}</Text>
            </View>
          </View>
          <View style={{ ...styles.auditRow, marginBottom: 0 }}>
            <Text style={{ width: 70 }}>{labels.remark}</Text>
            <View style={styles.auditLine}>
               <Text style={{ paddingLeft: 10 }}>{data?.it_approval_comment || ""}</Text>
            </View>
          </View>
          <View style={{ borderBottom: '1pt solid #000', marginTop: 15 }} />
          <View style={{ borderBottom: '1pt solid #000', marginTop: 15 }} />
        </View>

        <Text style={styles.footerText}>FM-IT-02 : Rev.01 : 25-09-2025</Text>
      </Page>
    </Document>
  );
}