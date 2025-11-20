<template>
    <ul class="navbar-nav">
        <LayoutsDefaultNavMenuItem v-for="(item, i) in menuConfig" :key="i" :item="item"
            i18n_key_prefix="navigation.main" />
    </ul>
</template>
<script lang="ts" setup>
const menuConfig = [
    {
        label: "profile.title",
        children: [
            { label: "profile.profile", to: "/about/profile" },
            { label: "profile.accreditation", to: "/" },
            { label: "profile.partnership", to: "/" },
            { label: "profile.leaders", to: "/" },
            { label: "profile.teaching_staff", to: "/" },
            { label: "profile.administrative_staff", to: "/" },
            { label: "profile.mars_of_faculty", to: "/" }
        ]
    },
    {
        label: "academic_programs.title",
        children: [
            { label: "academic_programs.diploma_programs.title", to: "/" },
            { label: "academic_programs.bachelor_programs.title", to: "/" },
            { label: "academic_programs.master_programs.title", to: "/" },
            { label: "academic_programs.doctoral_programs.title", to: "/" },
            { label: "academic_programs.admission.title", to: "/" }
        ]
    },
    {
        label: "research.title",
        children: [
            { label: "research.journals", to: "/" },
            { label: "research.research_groups", to: "/" },
            { label: "research.conferences", to: "/" },
            { label: "research.publications", to: "/" }
        ]
    },
    {
        label: "community_service.title",
        children: [
            { label: "community_service.websites", to: "/" },
            { label: "community_service.publications", to: "/" },
            { label: "community_service.activities", to: "/" },
            { label: "community_service.journals", to: "/" }
        ]
    },
    {
        label: "inter_center.title",
        children: [
            { label: "inter_center.organization_structure", to: "/" },
            { label: "inter_center.roadmap", to: "/" },
            { label: "inter_center.existing_condition", to: "/" },
            { label: "inter_center.inter_report", to: "/" }
        ]
    },
    {
        label: "student_affairs.title",
        children: [
            { label: "student_affairs.organizations", to: "/" },
            { label: "student_affairs.achievements", to: "/" },
            { label: "student_affairs.calendar", to: "/" },
            { label: "student_affairs.scholarships", to: "/" }
        ]
    },
    {
        label: "facility.title",
        children: [
            { label: "facility.report", to: "/" },
            { label: "facility.disabilities", to: "/" },
            { label: "facility.insurance", to: "/" },
            { label: "facility.medical", to: "/" },
            { label: "facility.sport", to: "/" },
            { label: "facility.support", to: "/" }
        ]
    },
    {
        label: "iceba",
        to: "/"
    }
]
</script>
<!-- cadangan -->
<script lang="ts">
export const menuConfig = [
    {
        label: "navigation.main.profile.title",
        children: [
            { label: "navigation.main.profile.profile", to: "/profile" },
            { label: "navigation.main.profile.accreditation", to: "/accreditation" },
            { label: "navigation.main.profile.partnership", to: "/partnership" },
            { label: "navigation.main.profile.leaders", to: "/leaders" },
            { label: "navigation.main.profile.teaching_staff", to: "/teaching-staff" },
            { label: "navigation.main.profile.administrative_staff", to: "/administrative-staff" },
            { label: "navigation.main.profile.mars_of_faculty", to: "/mars-of-faculty" }
        ]
    },

    {
        label: "navigation.main.academic_programs.title",
        children: [
            {
                label: "navigation.main.academic_programs.diploma_programs.title",
                children: [
                    { label: "navigation.main.academic_programs.diploma_programs.company_management", to: "/company-management" },
                    { label: "navigation.main.academic_programs.diploma_programs.financial_administration", to: "/financial-administration" },
                    { label: "navigation.main.academic_programs.diploma_programs.secretary", to: "/secretary" },
                    { label: "navigation.main.academic_programs.diploma_programs.accounting", to: "/accounting" }
                ]
            },
            {
                label: "navigation.main.academic_programs.bachelor_programs.title",
                children: [
                    { label: "navigation.main.academic_programs.bachelor_programs.accounting", to: "/accounting" },
                    { label: "navigation.main.academic_programs.bachelor_programs.management", to: "/management" },
                    { label: "navigation.main.academic_programs.bachelor_programs.development_economics", to: "/development-economics" },
                    { label: "navigation.main.academic_programs.bachelor_programs.sharia_economics", to: "/sharia-economics" }
                ]
            },
            {
                label: "navigation.main.academic_programs.master_programs.title",
                children: [
                    { label: "navigation.main.academic_programs.master_programs.economics", to: "/economics" },
                    { label: "navigation.main.academic_programs.master_programs.management", to: "/management" },
                    { label: "navigation.main.academic_programs.master_programs.accounting", to: "/accounting" }
                ]
            },
            {
                label: "navigation.main.academic_programs.doctoral_programs.title",
                children: [
                    { label: "navigation.main.academic_programs.doctoral_programs.economics", to: "/economics" },
                    { label: "navigation.main.academic_programs.doctoral_programs.management", to: "/management" }
                ]
            },
            {
                label: "navigation.main.academic_programs.admission.title",
                children: [
                    {
                        label: "navigation.main.academic_programs.admission.inter.title",
                        children: [
                            { label: "navigation.main.academic_programs.admission.inter.inter_office", to: "/inter-office" }
                        ]
                    },
                    {
                        label: "navigation.main.academic_programs.admission.national.title",
                        children: [
                            { label: "navigation.main.academic_programs.admission.national.national_selection", to: "/national-selection-university-entrance-test" },
                            { label: "navigation.main.academic_programs.admission.national.joint_selection", to: "/joint-selection-university-entrance-test" },
                            { label: "navigation.main.academic_programs.admission.national.independent_selection", to: "/independent-entrance-selection" }
                        ]
                    },
                    {
                        label: "navigation.main.academic_programs.admission.bilingual_programs.title",
                        children: [
                            { label: "navigation.main.academic_programs.admission.bilingual_programs.recruitment", to: "/recruitment" },
                            { label: "navigation.main.academic_programs.admission.bilingual_programs.course_offered", to: "/course-offered" },
                            { label: "navigation.main.academic_programs.admission.bilingual_programs.activities", to: "/activities" }
                        ]
                    }
                ]
            }
        ]
    },

    {
        label: "navigation.main.research.title",
        children: [
            { label: "navigation.main.research.journals", to: "/journals" },
            { label: "navigation.main.research.research_groups", to: "/research-groups" },
            { label: "navigation.main.research.conferences", to: "/conferences" },
            { label: "navigation.main.research.publications", to: "/publications" }
        ]
    },

    {
        label: "navigation.main.community_service.title",
        children: [
            { label: "navigation.main.community_service.websites", to: "/websites" },
            { label: "navigation.main.community_service.publications", to: "/publications" },
            { label: "navigation.main.community_service.activities", to: "/activities" },
            { label: "navigation.main.community_service.journals", to: "/journals" }
        ]
    },

    {
        label: "navigation.main.inter_center.title",
        children: [
            { label: "navigation.main.inter_center.organization_structure", to: "/organization-structure" },
            { label: "navigation.main.inter_center.roadmap", to: "/roadmap" },
            { label: "navigation.main.inter_center.existing_condition", to: "/existing-condition" },
            { label: "navigation.main.inter_center.inter_report", to: "/international-report" }
        ]
    },

    {
        label: "navigation.main.student_affairs.title",
        children: [
            { label: "navigation.main.student_affairs.organizations", to: "/organizations" },
            { label: "navigation.main.student_affairs.achievements", to: "/achievements" },
            { label: "navigation.main.student_affairs.calendar", to: "/academic-calendar" },
            { label: "navigation.main.student_affairs.scholarships", to: "/scholarships" }
        ]
    },

    {
        label: "navigation.main.facility.title",
        children: [
            { label: "navigation.main.facility.report", to: "/facility-report" },
            { label: "navigation.main.facility.disabilities", to: "/disabilities" },
            { label: "navigation.main.facility.insurance", to: "/insurance" },
            { label: "navigation.main.facility.medical", to: "/medical-facilities" },
            { label: "navigation.main.facility.sport", to: "/sport-and-leisure-facilities" },
            { label: "navigation.main.facility.support", to: "/supporting-systems" }
        ]
    },

    {
        label: "navigation.main.iceba",
        to: "/iceba-st-2025"
    }
]
</script>