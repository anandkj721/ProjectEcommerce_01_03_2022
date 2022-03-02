using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ecom.Helpers
{
   
        public static class EncDscPassword
        {
            public static string secretKey = "@123secretkeydontshare";
            public static string EncryptPassword(string password)
            {
                if (string.IsNullOrEmpty(password))
                {
                    return "";
                }
                else
                {
                    password = password + secretKey;
                    var passwordinBytes = Encoding.UTF8.GetBytes(password);
                    return Convert.ToBase64String(passwordinBytes);
                //******
                //var encodedStr = Convert.ToBase64String(Encoding.UTF8.GetBytes(password));
                //return encodedStr;
            }

            }
            public static string DecryptPassword(string encryptedPassword)
            {
                if (string.IsNullOrEmpty(encryptedPassword))
                {
                    return "";
                }
                else
                {
                
                //string inputStr = Encoding.UTF8.GetString(Convert.FromBase64String(encryptedPassword));
                //***
                var encodedBytes = System.Convert.FromBase64String(encryptedPassword);
                    var actualPassword = Encoding.UTF8.GetString(encodedBytes);
                    actualPassword = actualPassword.Substring(0, actualPassword.Length - secretKey.Length);
                    return actualPassword;
                }
            }
        }
    }

