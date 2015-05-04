
package com.soldoutazondb.data;

import java.util.Date;


/**
 *  soldoutazonDB.User
 *  04/23/2015 09:33:13
 * 
 */
public class User {

    private Integer id;
    private String username;
    private String password;
    private String role;
    private Date lastlogin;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Date getLastlogin() {
        return lastlogin;
    }

    public void setLastlogin(Date lastlogin) {
        this.lastlogin = lastlogin;
    }

}
