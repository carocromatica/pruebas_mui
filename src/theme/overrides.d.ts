import { TypographyVariantsOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    intro: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    intro?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    intro: true;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsVariantOverrides {
    capricho: true;
  }
}
