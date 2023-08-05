export interface SiteConfig {
    siteName: string;
    description: string;
    socialsLinks:{
        twitter: string;
        instagram: string;
        youtube: string;
        facebook: string;
};
}


const siteConfig = {
    siteName:"", 
    description:"",
    socialsLinks:{
        twitter:"",
        instagram: "",
        youtube: "",
        facebook:"",
    },
};

export default siteConfig;